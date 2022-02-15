import React, {createContext, useContext, useEffect, useState} from 'react';
import { collection, getDocs, query, where, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

//Create Products Context
const ProductsContext = React.createContext();

//Use Products - Costum Hook
export function useProducts() {
  return useContext(ProductsContext)
}

//Get Products from id - Costum Hook
export function useProductWithId (id) {
	const products = useProducts();
	return (
		products.find(product => product.id == id)
	)
}

//Create ProductsProvider Component -> Cleaner way of using <ProductsContext.Provider>
const ProductsProvider = ( {children} ) => {
	const [products, setProducts] = useState([])
	
	// FIREBASE
	useEffect(() => {
		const getFromFirebase = async () => {
			const query = collection(db, "products"); //gets "products" collection from db database
			const snapshot = await getDocs( query ); //gets data from query ("products" collection)
			// firebase doesn't support .map => use .forEach instead
			snapshot.forEach(doc => {
				//ues doc.data() to get the object with data and doc.id to get the id of the product
				console.log(doc.id);
				console.log(doc.data());
				setProducts( [...products, {id: doc.id, ...doc.data()}])
				console.log(products)
			})
		}
		getFromFirebase();
	}, []);

/* 	
    To filter products by props:
	import { query, where } from "firebase/firestore";
	const q = query(collection(db, "products"), where("category","===","oat drink")); 
	const snapshot = await getDocs( q ); 
	
	  To filter products by id:
	import { getDoc, doc } from "firebase/firestore";
	const docRef = doc(db, "products", "xV86jmuzLWub7ZpCnWiJ")
	const docSnapshot = await getDoc(docRef)
	console.log(docSnapshot.data())
	*/

    return (
		<ProductsContext.Provider value={products} >
			{ children }
		</ProductsContext.Provider>
	);
};

export default ProductsProvider;


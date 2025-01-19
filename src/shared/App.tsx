import { Layout } from "./Layout/Layout";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductListPage } from "../pages/ProductListPage/ProductListPage";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { MainPage } from "../pages/MainPage/MainPage";

//  useState -> [state, setState]
// [name, setName] = [state, setState]
// name = 10 - неправильно
// setName(10) - правильно

// useState -> [state, setState]
// state - состояние, 10, "", {}, [].
// setState - функция, которая изменяет состояние

export function AppComponent() {
	// const [count, setCount] = useState(0) // useState принимает инициальное значение

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout></Layout>}>
						<Route
							path="/products"
							element={<ProductListPage></ProductListPage>}
						></Route>
						<Route
							path="/product/:id"
							element={<ProductPage></ProductPage>}
						></Route>
						<Route path="/" element={<MainPage></MainPage>}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

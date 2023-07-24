import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import "./public-path"
import { BrowserRouter } from "react-router-dom"

function render(props) {
	const { container } = props
	// ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
	const root = ReactDOM.createRoot(container ? container.querySelector("#root") : document.querySelector("#root"))
	root.render(
		<React.StrictMode>
			<BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? "/app1" : "/"}>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	)
}

if (!window.__POWERED_BY_QIANKUN__) {
	render({})
}

export async function bootstrap() {
	console.log("[react16] react app bootstraped")
}

export async function mount(props) {
	console.log("[react16] props from main framework", props)
	props.onGlobalStateChange((state, prev) => {
		// state: 变更后的状态; prev 变更前的状态
		console.log(222, state, prev)

		// setTimeout(() => {
		//   // eslint-disable-next-line no-undef
		//   props.setGlobalState(state);
		// }, 1000)
	})

	render(props)
}

// 从生命周期 mount 中获取通信方法，使用方式和 master 一致
// export function mount(props) {
//   props.onGlobalStateChange((state, prev) => {
//     // state: 变更后的状态; prev 变更前的状态
//     console.log(state, prev);
//   });

//   props.setGlobalState(state);
// }

export async function unmount(props) {
	const { container } = props
	// ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

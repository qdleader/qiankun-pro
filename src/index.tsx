import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

import { registerMicroApps, start } from "qiankun"

import { initGlobalState, MicroAppStateActions } from "qiankun"

const state = {
	token: "qdleader",
}

// 初始化 state
const actions: MicroAppStateActions = initGlobalState(state)

actions.onGlobalStateChange((state, prev) => {
	// state: 变更后的状态; prev 变更前的状态
	console.log(state, prev)
})
actions.setGlobalState(state)
actions.offGlobalStateChange()
// actions.setGlobalState({ ...state, token: "yyy" })
setTimeout(() => {
	actions.setGlobalState({ ...state, token: "yyy" })
}, 1000)

registerMicroApps([
	{
		name: "app1", // app name registered
		entry: "//localhost:3001",
		container: "#app1",
		activeRule: "/app1",
		props: {
			nickname: "qdleader",
		},
	},
	{
		name: "vue3",
		// entry: { scripts: ['//localhost:7100/main.js'] },
		entry: "//localhost:8081",
		container: "#app2",
		activeRule: "/app2",
	},
])

start()
const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

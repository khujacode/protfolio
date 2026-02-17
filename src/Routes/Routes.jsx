import { lazy } from "react"


export const Layout = lazy (() => import ("../Layout/Layout.jsx"))
export const Main = lazy (() => import ("../Pages/Main/Main.jsx"))
export const About_me = lazy (() => import ("../Pages/About_me/About_me.jsx"))
export const Projects = lazy (() => import ("../Pages/Projects/Projects.jsx"))
export const Nothing = lazy (() => import ("../Pages/Nothing/Nothing.jsx"))
export const Send_me = lazy(() => import ("../Pages/Send_me/Send_me.jsx"))

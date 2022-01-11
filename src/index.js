import ReactDOM from "react-dom";
import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// import shared layout component
import Layout from "./components/Layout";
import Home from "./pages/home";
import MyNotes from "./pages/mynotes";
import Favorites from "./pages/favorites";
import NotePage from "./pages/note";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const uri = "http://localhost:4000/api";
const cache = new InMemoryCache();
// configure Apollo Client
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="mynotes" element={<MyNotes />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  );
};
const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);

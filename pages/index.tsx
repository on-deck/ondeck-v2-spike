import Link from "next/link";
import React, { useState } from "react";
import {
  useViewerQuery,
  useUpdateNameMutation,
  ViewerDocument,
} from "../lib/viewer.graphql";
import { initializeApollo } from "../lib/apollo";
import Navigation from "../components/Navigation";

const Index = () => {
  const { viewer } = useViewerQuery().data!;
  const [newName, setNewName] = useState("");
  const [updateNameMutation] = useUpdateNameMutation();

  const onChangeName = () => {
    updateNameMutation({
      variables: {
        name: newName,
      },
      //Follow apollo suggestion to update cache
      //https://www.apollographql.com/docs/angular/features/cache-updates/#update
      update: (
        store,
        {
          data: {
            updateName: { name },
          },
        }
      ) => {
        // Read the data from our cache for this query.
        const { viewer } = store.readQuery({ query: ViewerDocument });
        const newViewer = { ...viewer };
        // Add our comment from the mutation to the end.
        newViewer.name = name;
        // Write our data back to the cache.
        store.writeQuery({
          query: ViewerDocument,
          data: { viewer: newViewer },
        });
      },
    });
  };

  return (
    <>
      <Navigation />
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          Next.js + GraphQL + Apollo + Tailwind CSS 2.0
        </h1>
      </div>
      <div className="text-center">
        <p className="dark:text-gray-50">
          You're signed in as {viewer.name} and you're {viewer.status}. Go to
          the{" "}
          <Link href="/about">
            <a>about</a>
          </Link>{" "}
          page.
        </p>
      </div>
      <div className="text-center py-20">
        <form>
          <input
            className="h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            placeholder="your new name..."
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            className="h-12 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
            type="button"
            value="Change"
            onClick={onChangeName}
          />
        </form>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ViewerDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Index;

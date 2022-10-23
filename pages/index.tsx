import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Index.module.css';
import Templete from './Components/Templetes/Templete';
import { resetServerContext } from 'react-beautiful-dnd';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kanban-board</title>
        <meta name="description" content="Created By Yuki" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <h1 className={styles.title}>Kanban-board with Next.js, TypeScript</h1>
        <section className={styles.purpose}>
          <h2>Purpose</h2>
          <p>
            The purpose of this page is to create a Trello-like drag-and-drop
            task management app using modern development languages and styles
            such as Next, TS, etc. This is my first portfolio page, available
            under MIT license, all rights reserved. Available under MIT license
            and all rights reserved.
          </p>
        </section>
        <section className={styles.author}>
          <h2>Author</h2>
          <p>
            Has experiences in BizDev(as a Intrepreneur) at the Japanese
            telecom, deep loves in Software. Dreams software engineer at
            @Google. You can reach out to my twitter🐦.
          </p>
        </section>
      </div>
      <main className={styles.kanbanapp}>
        <Templete />
      </main>

      <footer className={styles.footer}></footer>
      <section className={styles.copyright}>
        <h2>Author</h2>
        <p>Copyright (c) 2020 Yuki. Released under the MIT license.</p>
      </section>
    </div>
  );
};

export default Home;

import styles from "../styles/home.module.css";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";


export default function Home() {
  
  const Hero = () => (
  <div className={styles.container}>
        
      <div className={styles.tags}>
        
          <div className = {styles.logo}></div>
          <div className={styles.tag}></div>
          <div className={styles.tag}></div>
          <div className={styles.tag}></div>
          <div className={styles.tag}></div>
          <div className={styles.tag}></div>
        
            <div className={styles.tag} style={{ color: "#d181ff" }}>
              v{process.env.NEXT_PUBLIC_APP_VERSION}
            </div>
            <a
              href="https://www.medusa-commerce.com/"
              arget="_blank"
              rel="noreferrer"
              role="button"
            >
              <div
                className={styles.tag}
                style={{ background: "var(--logo-color-900)", color: "#d181ff" }}
              >
                Medusa
              </div>
            </a>
            <a
              href="https://nextjs.org/docs/getting-started"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              <div
                className={styles.tag}
                style={{ color: "#d181ff" }}
              >
                Next.js
              </div>
            </a>
            <a
              href="https://stripe.com/docs"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              <div
                className={styles.tag}
                style={{ color: "#d181ff" }}
              >
                Stripe
              </div>
            </a>
         
        
      </div>

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Medusa + Next.js Starters{" "}
          </h1>
          <p className={styles.description}>
            Build blazing-fast client applications on top of a modular headless
            commerce engine. Integrate seamlessly with any 3rd party tools for a
            best-in-breed commerce stack.
          </p>
          
          <div className={styles.links} >
            <a
              href="https://docs.medusa-commerce.com/"
              target="_blank"
              rel="noreferrer"
              role="button"
              className={styles.btn}
              style={{ background: "#2e333a", color: "white" }}
            >
              Read the docs
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/medusajs/nextjs-starter-medusa"
              target="_blank"
              rel="noreferrer"
              role="button"
              className={styles.btn1}
              style={{ background: "gray", color: "white" }}
            >
              View on GitHub
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={styles.products}>
          <h2>Demo Products</h2>
          <div className={styles.grid}>

    
         
          </div>
        </div>
      </main>
    </div>

  );

  

    return (
    <div className="font-sans">
      <Hero />
     
    </div>
  );
}



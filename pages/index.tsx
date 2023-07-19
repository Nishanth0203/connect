// import { ConnectWallet } from "@thirdweb-dev/react";
// import styles from "../styles/Home.module.css";
// import Image from "next/image";
// import { NextPage } from "next";

// const Home: NextPage = () => {
//   return (
//     <div className={styles.continer}>
//     <main className={styles.main}>
//       <ConnectWallet />
//     </main>
//     </div>
//   );
// };

// export default Home;

// import { ConnectWallet } from "@thirdweb-dev/react";
//  // Rename your index.css to index.module.css
// import Image from "next/image";
// import { NextPage } from "next";

// const Home: NextPage = () => {
//   return (
//     <div className={styles.container}>
//       <header>
//         <nav>
//           <div className={styles.logo}>
//             <img src="/symbol.png" alt="eProcure logo" />
//             <h1>eProcure</h1>
//           </div>
//           <ul className={styles.navLinks}>
//             <li><a href="#"><h3>Home</h3></a></li>
//             <li><a href="#"><h3>Projects</h3></a></li>
//             <li><a href="#"><h3>RFQ Submission</h3></a></li>
//             <li><a href="#"><h3>Bidder Registration</h3></a></li>
//             <li><a href="#"><h3>Contact Us</h3></a></li>
//             <li><button id="walletButton" className={styles.walletConnectBtn}><h3>Connect Wallet</h3></button></li>
//           </ul>
//         </nav>
//       </header>
//       <main className={styles.main}>
//         <ConnectWallet />
//       </main>
//       {/* Add other sections and content here */}
//     </div>
//   );
// };

// export default Home;

import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/index.module.css";
import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <header>
        <nav>
          <div className={styles.logo}>
            <img src="/symbol.png" alt="eProcure logo" />
            <h1>eProcure</h1>
          </div>
          <ul className={styles.navLinks}>
            <li><a href="#"><h3>Home</h3></a></li>
            <li><a href="#"><h3>Projects</h3></a></li>
            <li><a href="#"><h3>RFQ Submission</h3></a></li>
            <li><a href="#"><h3>Bidder Registration</h3></a></li>
            <li><a href="#"><h3>Contact Us</h3></a></li>
            <li><button id="walletButton" className={styles.walletConnectBtn}><h3>Connect Wallet</h3></button></li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <ConnectWallet />
      </main>
      {/* Add other sections and content here */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>Welcome to eProcure</h2>
          <p>India's Leading e-Procurement Platform</p>
          <a href="#" className="btn">Get Started</a>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <h3>About Us</h3>
          <p>eProcure is an innovative platform that revolutionizes the procurement process in India. Our goal is to
            streamline the bidding and contract award process, ensuring transparency, efficiency, and fairness.</p>
          <a href="#" className="btn">Learn More</a>
        </div>
      </section>

      <section className={styles.featuredProjects}>
        <h3>Featured Projects</h3>
        <div className={styles.projectCard}>
          <img src="project1.jpg" alt="Project 1" />
          <h4>Project Name</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id nisl mauris.</p>
          <a href="#" className="btn">View Details</a>
        </div>
        <div className={styles.projectCard}>
          <img src="project2.jpg" alt="Project 2" />
          <h4>Project Name</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id nisl mauris.</p>
          <a href="#" className="btn">View Details</a>
        </div>
        <div className={styles.projectCard}>
          <img src="project3.jpg" alt="Project 3" />
          <h4>Project Name</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id nisl mauris.</p>
          <a href="#" className="btn">View Details</a>
        </div>
      </section>

      <section className={styles.rfqSubmission}>
        <h3>RFQ Submission</h3>
        <p>Submit your Request for Quotation (RFQ) to participate in bidding for various projects. Our streamlined process
          ensures transparency and fairness in the procurement process.</p>
        <a href="#" className="btn">Submit RFQ</a>
      </section>

      <section className={styles.bidderRegistration}>
        <h3>Bidder Registration</h3>
        <p>Register as a bidder to gain access to a wide range of projects and participate in the bidding process. Sign up
          today to explore the opportunities.</p>
        <a href="#" className="btn">Register Now</a>
      </section>

      <section className={styles.contact}>
        <h3>Contact Us</h3>
        <p>Have any questions or need assistance? Contact our support team for prompt assistance and guidance.</p>
        <a href="#" className="btn">Contact Us</a>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2023 eProcure. All rights reserved.</p>
        <ul className={styles.footerLinks}>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;


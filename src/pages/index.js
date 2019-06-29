import React from "react";
import { Link } from "gatsby";

import Layout from "../components/UI/Layout/layout";
import Image from "../components/UI/Image/image";
import SEO from "../components/SEO/seo";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus quibusdam numquam molestiae voluptates saepe architecto
            aliquid consequuntur expedita veritatis, similique vitae
            praesentium, temporibus deleniti nostrum dicta dolorum reprehenderit
            at doloremque beatae illo quo consequatur, asperiores corrupti
            voluptatibus. Nihil beatae porro quasi quibusdam temporibus magni?
            Molestias consequatur atque et ipsa neque tempora sequi natus nisi,
            veritatis provident dolorum aspernatur nobis quisquam.
        </p>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus quibusdam numquam molestiae voluptates saepe architecto
            aliquid consequuntur expedita veritatis, similique vitae
            praesentium, temporibus deleniti nostrum dicta dolorum reprehenderit
            at doloremque beatae illo quo consequatur, asperiores corrupti
            voluptatibus. Nihil beatae porro quasi quibusdam temporibus magni?
            Molestias consequatur atque et ipsa neque tempora sequi natus nisi,
            veritatis provident dolorum aspernatur nobis quisquam.
        </p>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus quibusdam numquam molestiae voluptates saepe architecto
            aliquid consequuntur expedita veritatis, similique vitae
            praesentium, temporibus deleniti nostrum dicta dolorum reprehenderit
            at doloremque beatae illo quo consequatur, asperiores corrupti
            voluptatibus. Nihil beatae porro quasi quibusdam temporibus magni?
            Molestias consequatur atque et ipsa neque tempora sequi natus nisi,
            veritatis provident dolorum aspernatur nobis quisquam.
        </p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
    </Layout>
);

export default IndexPage;

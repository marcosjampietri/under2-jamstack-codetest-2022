import Head from "next/head";
import dynamic from "next/dynamic";

const FeaturedBenefits = dynamic(() =>
    import("../components/sections/FeaturedBenefits").then(
        (mod) => mod.FeaturedBenefits
    )
);

// import { FeaturedBenefits } from '../components/sections/FeaturedBenefits'
const FeaturedPartners = dynamic(() =>
    import("../components/sections/FeaturedPartners/FeaturedPartners").then(
        (mod) => mod.FeaturedPartners
    )
);
const GlobalFooter = dynamic(() =>
    import("../components/sections/GlobalFooter").then(
        (mod) => mod.GlobalFooter
    )
);
const GlobalNavigation = dynamic(() =>
    import("../components/sections/GlobalNavigation").then(
        (mod) => mod.GlobalNavigation
    )
);
const HomeHero = dynamic(() =>
    import("../components/sections/HomeHero").then((mod) => mod.HomeHero)
);
const LatestArticles = dynamic(() =>
    import("../components/sections/LatestArticles").then(
        (mod) => mod.LatestArticles
    )
);

import featuredPartnersJSON from "../content/featured-partners.json";

export function getStaticProps() {
    return {
        props: {},
    };
}

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Mula | The reporting tools taking the fintech world by storm
                </title>
                <meta
                    name="description"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <GlobalNavigation />
            <div className="grow">
                <HomeHero />
                <FeaturedBenefits padding="mdTopOnly" />
                <FeaturedPartners partners={featuredPartnersJSON} />
                <LatestArticles />
            </div>
            <GlobalFooter />
        </>
    );
}

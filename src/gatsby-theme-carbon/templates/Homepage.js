import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import Carbon from '../../images/carbon.jpg';

const FirstLeftText = () =>
    <h2>CD Review</h2>
;
const FirstRightText = () => (
    <p>
        <code>Black Music CD Review</code> introduces CD review for Soul and Hip-Hop since 1998
    </p>
);

const SecondLeftText = () => <h2> Album Best 50</h2>;

const SecondRightText = () => (
    <p>
        Black Music Best 50 albums since 1998
    </p>
);

const BannerText = () => <h1>Black Musicc CD Review by planet.ky</h1>;

const customProps = {
    Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
    FirstCallout: (
        <HomepageCallout
            backgroundColor="#78a9ff"
            color="white"
            leftText={FirstLeftText}
            rightText={FirstRightText}
        />
    ),
    SecondCallout: (
        <HomepageCallout
            leftText={SecondLeftText}
            rightText={SecondRightText}
            color="white"
            backgroundColor="#78a9ff"
        />
    ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
    return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;

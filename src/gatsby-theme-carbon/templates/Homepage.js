import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/carbon.jpg';

const FirstLeftText = () => <p>Black Music CD Review</p>;

const FirstRightText = () => (
    <p>
        This is a callout component. You can edit the contents by updating
    . You can also provide <code>color</code> and <code>backgroundColor</code>{' '}
    props to suit your theme.
        <a
            className={calloutLink}
            href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/master/packages/example/src/gatsby-theme-carbon/templates/Homepage.js"
        >
            Homepage
    </a>
    </p>
);

const SecondLeftText = () => <p>Black Music CD Review</p>;

const SecondRightText = () => (
    <p>
        You can also not 
        <a
            className={calloutLink}
            href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/master/packages/example/src/gatsby-theme-carbon/templates/Homepage.js"
        >
            Homepage
    </a>
    </p>
);

const BannerText = () => <h1>planet.ky</h1>;

const customProps = {
    Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
    FirstCallout: (
        <HomepageCallout
            backgroundColor="#030303"
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
            backgroundColor="#061f80"
        />
    ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
    return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;

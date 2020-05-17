import React from 'react';
import { Tag } from 'carbon-components-react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/carbon.jpg';

const FirstLeftText = () => <p>Black Music CD Review</p>;

const FirstRightText = () => (
    <p>
        <code>Black Music CD Review</code> introduces CD review for Soul and Hip-Hop since 1998
        <div>
            <Tag type="blue" title="Clear Filter"> 2019 </Tag>
        </div>
    </p>
);

const SecondLeftText = () => <p>CD Best 50</p>;

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

import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

const FirstLeftText = () => <p>Welcome to Black Music CD Review</p>;

const FirstRightText = () => (
  <p>
    This is a callout component. You can edit the contents by updating the 
    . You can also provide <code>color</code> and <code>backgroundColor</code> 
    props to suit your theme.
  </p>
);

const SecondLeftText = () => <p>Callout component</p>;

const SecondRightText = () => (
  <p>
    You cann also not use these components at all by not providing the callout
    props to the template or writing your own template.
    
  </p>
);

const BannerText = () => <h1>Welcome To Black Music CD Review</h1>;

const customProps = {
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

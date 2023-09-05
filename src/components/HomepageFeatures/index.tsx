import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Decentralized by Default',
    Svg: require('@site/static/img/null.svg').default,
    description: (
      <>
        Share a single decentralized network of sequencers that's simple and
        permissionless to join.
      </>
    ),
  },
  {
    title: 'Cross-Rollup Composability',
    Svg: require('@site/static/img/null.svg').default,
    description: (
      <>
        Astria enables atomic transaction inclusion across rollups via
        its native transaction bundles.
      </>
    ),
  },
  {
    title: 'Maintain Sovereignty',
    Svg: require('@site/static/img/null.svg').default,
    description: (
      <>
        Rollups own their execution and state. Swapping out the sequencing layer
        is as simple as updating your Rollup software.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

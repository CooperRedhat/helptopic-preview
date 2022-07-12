import React from 'react';
import { Stack, StackItem } from '@patternfly/react-core';
import { LoadingBox, HelpTopicContainer, HelpTopicContext } from '@patternfly/quickstarts';
import {examples} from './examples/example-helptopics';
import '@patternfly/patternfly/patternfly.css';
import '@patternfly/patternfly/patternfly-addons.css';
import '@patternfly/quickstarts/dist/quickstarts.css';

const TinyMockConsole = () => {
  const { setActiveHelpTopicByName } = React.useContext(HelpTopicContext);

  const handleSetTopic = (name) => {
    setActiveHelpTopicByName(name);
  };

  return (
    <Stack hasGutter>
      {examples.map((topic) => {
        return (
          <StackItem key={topic.name}>
            <span onClick={() => handleSetTopic(topic.name)}>Open {topic.title}</span>
          </StackItem>
        );
      })}
    </Stack>
  );
};

export const HelpTopicPreviewer = () => {
  const language = localStorage.getItem('bridge/language') || 'en';

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const load = async () => {
      setLoading(false);
    };
    setTimeout(() => {
      load();
    }, 500);
  }, []);

  const inContextHelpProps = {
    helpTopics: examples,
    language,
    loading,
  };

  return (
    <React.Suspense fallback={<LoadingBox />}>
      <HelpTopicContainer {...inContextHelpProps}>
        <TinyMockConsole />
      </HelpTopicContainer>
    </React.Suspense>
  );
};

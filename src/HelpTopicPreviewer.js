import React from 'react';
import { Stack, StackItem } from '@patternfly/react-core';
import { LoadingBox, HelpTopicContainer, HelpTopicContext } from '@patternfly/quickstarts';
import {examples} from './examples/example-helptopics'

const TinyMockConsole = () => {
  const { setActiveHelpTopicByName, helpTopics } = React.useContext(HelpTopicContext);

  const handleSetTopic = (name) => {
    setActiveHelpTopicByName(name);
  };

  return (
    <Stack hasGutter>
        {console.log(examples)}
      {/* {helpTopics.map((topic) => {
        return (
          <StackItem key={topic.name}>
            <a onClick={() => handleSetTopic(topic.name)}>Open Help {topic.title}</a>
          </StackItem>
        );
      })} */}
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
    helpTopics: exampleHelpTopics,
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

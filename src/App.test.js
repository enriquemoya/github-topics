import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import TOPIC_QUERY from './Queries/TopicsQuery';
import App from './App';
import Header from './Components/Header/HeaderComponent';

const mocks = [
  {
    request: {
      query: TOPIC_QUERY,
      variables: {
        name: 'react',
      },
    },
    result: {
      data: {
        topic: { 
          "id": "MDU6VG9waWNyZWFjdA==",
          "name": "react",
          "stargazerCount": 56900,
          "viewerHasStarred": false,
          "relatedTopics": [
            {
              "id": "MDU6VG9waWNhbmd1bGFy",
              "name": "angular",
              "stargazerCount": 34363
            } 
          ]
        },
      },
    },
  },
];

it('renders without error', async () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false} >
      <App />
    </MockedProvider>,
  );
  const instance = component.root;
  expect(instance.findByType(Header).props.state.text).toBe('');
  expect(instance.findByType(Header).props.state.data).toEqual([]);
  expect(instance.findByType(Header).props.state.current).toEqual(null);

});
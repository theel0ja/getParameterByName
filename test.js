import test from 'ava';
import getQueryParameterByName from './index';

test('script is working with url variable set', t => {
  const url = "https://www.example.com/search?q=nodejs";
  const queryParameter = "q";

  const rightAnswer = "nodejs";

  t.is(rightAnswer, getQueryParameterByName(queryParameter, url));
});
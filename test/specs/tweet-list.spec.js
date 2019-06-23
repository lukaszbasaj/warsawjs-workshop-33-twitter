import { assert } from 'chai'
import Tweet from '@/components/tweet';
import TweetList from '@/components/tweet-list';
import { mount } from '@vue/test-utils';



suite('TweetList', () => {
    it('should render Tweet in TweetList', () => {
        const wrapper = mount(TweetList);
        assert.ok(wrapper.contains(Tweet));
    });
});

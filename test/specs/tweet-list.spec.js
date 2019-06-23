import { assert } from 'chai'
import Tweet from '@/components/tweet';
import TweetList from '@/components/tweet-list';
import { mount } from '@vue/test-utils';




suite('TweetList', () => {
    it('should render Tweet in TweetList', () => {
        const wrapper = mount(TweetList, {
            propsData: {
                tweets: [
                    { id: '123456', body: 'ertyuio' },
                    { id: '1234567', body: 'qwertyu' },
                ]
            }
        },
            {
                stubs: {
                    'b-card': true,
                    'b-card-text': true,
                }
            });
        assert.ok(wrapper.contains(Tweet));
    });
});

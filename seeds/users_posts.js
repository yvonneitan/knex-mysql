
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('users').del()

  await knex('users').insert([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eva' },
    { id: 6, name: 'Frank' },
    { id: 7, name: 'Grace' },
    { id: 8, name: 'Hannah' },
    { id: 9, name: 'Isaac' },
    { id: 10, name: 'Jack' }
  ]);
  // Insert seed entries for posts
  await knex('posts').insert([
    { id: 1, user_id: 1, title: 'Alice’s First Post', content: 'Alice shares her thoughts on the latest tech trends and how she stays ahead of the curve.' },
    { id: 2, user_id: 2, title: 'Bob’s Adventure', content: 'Bob writes about his hiking trip in the mountains and the challenges he faced.' },
    { id: 3, user_id: 3, title: 'Charlie’s Thoughts', content: 'Charlie shares his deep thoughts on philosophy and the meaning of life.' },
    { id: 4, user_id: 4, title: 'David’s Discovery', content: 'David discovered a new programming framework that has changed the way he writes code.' },
    { id: 5, user_id: 5, title: 'Eva’s Insights', content: 'Eva gives some insightful tips on improving productivity and time management.' },
    { id: 6, user_id: 6, title: 'Frank’s Journey', content: 'Frank writes about his journey to self-improvement and what he has learned along the way.' },
    { id: 7, user_id: 7, title: 'Grace’s Guide', content: 'Grace provides a detailed guide on how to start a new project from scratch and stay organized.' },
    { id: 8, user_id: 8, title: 'Hannah’s Tips', content: 'Hannah shares her top 5 tips for becoming a better developer and staying motivated.' },
    { id: 9, user_id: 9, title: 'Isaac’s Innovations', content: 'Isaac discusses the latest innovations in AI technology and their implications for the future.' },
    { id: 10, user_id: 10, title: 'Jack’s Story', content: 'Jack tells the story of how he started his business and overcame numerous challenges.' }
  ]);
};

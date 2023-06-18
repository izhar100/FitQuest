import './Content.css';
import YouTube from 'react-youtube';

const articles = [
  {
    id: 1,
    title: '10 Effective Exercises for Building Muscle',
    description: 'Learn about 10 exercises that can help you build muscle and increase strength.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmiBvMJCdU4NRAzVQ_9uLldBjDYwmrncbRGw&usqp=CAU',
    link: 'https://example.com/article1'
  },
  {
    id: 2,
    title: 'The Benefits of High-Intensity Interval Training (HIIT)',
    description: 'Discover the advantages of HIIT and how it can improve your fitness levels.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5jvyA5w9R-AzuOl7XH_uStBzYJe1Dr6RcnQ&usqp=CAU',
    link: 'https://example.com/article2'
  },
  {
    id: 3,
    title: 'Yoga for Beginners: Essential Poses and Tips',
    description: 'Get started with yoga and learn some basic poses and helpful tips.',
    imageUrl: 'data:image/jpeg;base64,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',
    link: 'https://example.com/article3'
  }
];

const videos = [
  {
    id: 1,
    title: 'Full Body Workout Routine',
    videoId: 'iCQ2gC4DqJw'
  },
  {
    id: 2,
    title: 'Cardio for Fat Burning',
    videoId: 'W5IiasNutB8'
  },
  {
    id: 3,
    title: 'Yoga Flow for Flexibility',
    videoId: 'KsVwAs9LriQ'
  }
];

const ContentPage = () => {
  return (
    <div className="content-page">
      <h1>Explore More about Workouts</h1>
      {articles.map(article => (
        <div className="content-item" key={article.id}>
          <img src={article.imageUrl} alt={article.title} />
          <div className="item-info">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.link} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        </div>
      ))}
      <hr />
      <h2>Some videos that you may Like</h2>
      <div className="video-list">
        {videos.map(video => (
          <div className="video-item" key={video.id}>
            <YouTube
            videoId={video.videoId}
            className="youtube-video"
            opts={{
              width: '560',
              height: '315',
              playerVars: {
                // Add any additional playerVars as needed
                fs: 1, // Enable fullscreen option
              },
            }}
          />
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentPage;
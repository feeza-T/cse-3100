import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Bengal' },
  { name: 'Shadow', age: '1', breed: 'Persian' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      <section className="text-center mt-4">
        <h1>Welcome to Purrfect Adoption</h1>
        <p className='text-gray-500'>
          At Purrfect Adoption, we believe every cat deserves a loving home. Whether you’re looking to adopt your first feline friend or add to your family,
          we’re here to help. Explore our adorable cats and start your journey to find the purrfect companion today!
        </p>
      </section>

      <section className="mt-5">
        <div >
          <h2 className="text-3xl font-bold">Featured Cats</h2>
        </div>
        <div className="mt-2 row g-4" id="cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div
                className="cat-card"
                style={{
                  height: '400px', 
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '10px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  justifyContent: 'flex-start',
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2"
                  style={{
                    borderRadius: '8px',
                    height: '250px',
                    objectFit: 'cover',
                  }}
                />
                <div className="cat-info" style={{ textAlign: 'left' }}>
                  <h3 className="h3 mb-1">Name: {cat.name}</h3>
                  <p className="h5 mb-2">Age: {cat.age}</p>
                  <p className= "h5 mb-2">Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

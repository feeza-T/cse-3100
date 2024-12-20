import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Bengal' },
  { name: 'Shadow', age: '1', breed: 'Persian' },
  { name: 'Pumpkin', age: '3', breed: 'Maine Coon' },
  { name: 'Luna', age: '4', breed: 'Siamese' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]); 
  const [breedFilter, setBreedFilter] = useState('All'); 
  const [nameFilter, setNameFilter] = useState(''); // State for the search input

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        // Fetch random cat images from the API for each cat
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );

        // Combine cat data with fetched images
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages); // Update the full cats state
        setFilteredCats(catsWithImages); // Initialize the filtered cats state with the full list
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages(); 
  }, []);

  useEffect(() => {
    let updatedCats = cats;

    // Filter by breed 
    if (breedFilter !== 'All') {
      updatedCats = updatedCats.filter((cat) => cat.breed === breedFilter);
    }

    // Filter by name
    if (nameFilter) {
      updatedCats = updatedCats.filter((cat) =>
        cat.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    // Update the filtered cats state
    setFilteredCats(updatedCats);
  }, [breedFilter, nameFilter, cats]); 

  const uniqueBreeds = ['All', ...new Set(availableCats.map((cat) => cat.breed))];

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>
      
      {/* Search and Filter */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3>Available Cats</h3>
        </div>
        <div className="d-flex">
          {/* Input field for searching cats by name */}
          <input
            type="text"
            placeholder="Search by name..."
            className="form-control me-2"
            value={nameFilter} 
            onChange={(e) => setNameFilter(e.target.value)} 
          />
          {/* Dropdown for selecting breed filter */}
          <select
            className="form-select"
            value={breedFilter}
            onChange={(e) => setBreedFilter(e.target.value)}
          >
            {uniqueBreeds.map((breed, index) => (
              <option key={index} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Cats Display */}
      <div className="row g-4" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div
              className="card shadow-sm"
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="card-img-top"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                }}
              />

              {/* Card Body */}
              <div className="card-body">
                <h5 className="card-title">Name: {cat.name}</h5>
                <p className="card-text mb-1">Age: {cat.age}</p>
                <p className="card-text mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* If No Cats Found */}
      {filteredCats.length === 0 && (
        <p className="mt-4 text-muted text-bold">No cats match your search criteria.</p>
      )}
    </section>
  );
}

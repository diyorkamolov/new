export const getStaticProps = async () => {
  try {
    // Replace URL.USE with your actual URL
    const response = await fetch(URL.USE);
    const data = await response.json();

    // Return the fetched data as props
    return {
      props: {
        data
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: null // or handle error condition as needed
      }
    };
  }
};

// Example usage of the fetched data in your Home component
const Home = ({ data }) => {
  // Render your UI based on the fetched data
  return (
    <div>
      {data ? (
        <p>Data fetched successfully!</p>
        // Render your data as needed
      ) : (
        <p>Failed to fetch data.</p>
        // Handle error case or loading state
      )}
    </div>
  );
};

export default Home;

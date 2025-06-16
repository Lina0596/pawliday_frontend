import { useEffect, useState } from "react";
import { getSitter, getOwners, getDogs } from "../api/api";
import { Pencil, CirclePlus } from "lucide-react";
import CardOne from "../components/CardOne";
import CardTwo from "../components/CardTwo";

export default function Owners() {
  // States
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sitter, setSitter] = useState([]);
  const [owners, setOwners] = useState([]);
  const [dogs, setDogs] = useState([]);

  // Fetch data
  useEffect(() => {
    async function loadSitter() {
      setLoading(true);
      try {
        const sitter = await getSitter(1);
        setSitter(sitter);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadSitter();
  }, []);

  useEffect(() => {
    if (!sitter.sitter_id) return;
    async function loadOwnersAndDogs() {
      setLoading(true);
      try {
        const owners = await getOwners(sitter.sitter_id);
        const dogs = await getDogs(sitter.sitter_id);
        setOwners(owners);
        setDogs(dogs);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadOwnersAndDogs();
  }, [sitter.sitter_id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      {owners.length > 0 ? (
        owners.map((owner) => {
          const dogImages = dogs
            .filter((dog) => dog.owner_id === owner.owner_id)
            .map((dog) => dog.img_url);
          return (
            <CardTwo
              key={owner.owner_id}
              className="mb-10"
              name={`${owner.first_name} ${owner.last_name}`}
              email={owner.email}
              phoneNumber={owner.phone_number}
              buttonIcon={<Pencil strokeWidth={3} />}
              images={dogImages}
            />
          );
        })
      ) : (
        <CardOne
          key={sitter.sitter_id}
          headline="Add your first 4-legged visitor!"
          text="Lorem ipsum dolor sit amet consectetur.
            Blandit congue sit sagittis cursus netus.
            Integer elementum eget libero et pellentesque
            blandit pellentesque viverra varius."
          buttonText="Add a dog"
          buttonIcon={<CirclePlus strokeWidth={3} />}
        />
      )}
    </div>
  );
}

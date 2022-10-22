import { Button } from "../components/Button";
import { handleGoToBounds } from "../helpers/leafletHelpers";

export function Features() {
  return (
    <div>
      <Button
        onClick={handleGoToBounds}
        className="mb-2"
      >
        Go to bounds
      </Button>
    </div>
  );
}
import type { NextPage } from "next";
import Title from "../ui/components/Title/Title";

const Home: NextPage = () => {
  return (
    <div>
      <Title
        title=""
        subtitle={
          <span>
            With a small monthly fee, you <br />
            can <strong>adopt a pet virtually</strong>
          </span>
        }
      />
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import List from "../ui/components/List/List";
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

      <List
        pets={[
          {
            id: 1,
            name: "Max",
            history: "djskldas",
            photo:
              "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
          },
        ]}
      />
    </div>
  );
};

export default Home;

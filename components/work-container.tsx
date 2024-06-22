import { Work as WorkType } from "@/types/types";
import Work from "./work";

type Props = {
  works: WorkType[];
};
export default async function WorkContainer({ works }: Props) {
  return (
    <div>
      {works.map((work: WorkType, i: number) => (
        <Work
          key={i}
          title={work.title}
          position={work.position}
          duration={work.duration}
          description={work.description}
          link={work.link}
        />
      ))}
    </div>
  );
}

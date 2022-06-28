import classNames from "classnames";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  const { data } = useGetLessonsQuery();

  return (
    <aside
      className={classNames(
        "absolute w-full lg:w-[348px] bg-gray-700 p-6 xl:border-l border-gray-600 lg:block lg:relative",
        {
          hidden: !isOpen,
        }
      )}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}

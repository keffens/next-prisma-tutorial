import { getCourses } from "../utils/db";

function CourseComponent({ course }) {
  return (
    <div>
      <h2>{course.title}</h2>
      <ul className="list-disc list-inside">
        {course.lessons.map((lesson) => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Homepage({ courses }) {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-8">
        <h1>Courses</h1>
        {courses.map((course) => (
          <CourseComponent key={course.id} course={course} />
        ))}
        {/* <pre>{JSON.stringify(courses, null, 2)}</pre> */}
      </div>
    </main>
  );
}

export const getStaticProps = async () => {
  const data = await getCourses();

  return {
    props: {
      courses: JSON.parse(JSON.stringify(data)),
    },
  };
};

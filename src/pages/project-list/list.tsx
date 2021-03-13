import { Project } from "types/project";
import { User } from "types/user";

interface ListProps {
  list: Project[];
  users: User[];
}

export const List = ({ list, users }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Project</th>
          <th>Manager</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find((user: User) => user.id === project.personId)?.name ||
                "Unknown"}
            </td>{" "}
            {/** handle undefined */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

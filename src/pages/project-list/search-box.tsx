import { User } from "types/user";

export interface SearchBoxProps {
  users: User[];
  search: {
    name: string;
    personId: string;
  };
  setSearch: (search: SearchBoxProps["search"]) => void;
}
export const SearchBox = ({ users, search, setSearch }: SearchBoxProps) => {
  return (
    <form action="">
      <input
        type="text"
        value={search.name}
        onChange={(e) =>
          setSearch({
            ...search,
            name: e.target.value,
          })
        }
      />
      <select
        name=""
        id=""
        value={search.personId}
        onChange={(e) =>
          setSearch({
            ...search,
            personId: e.target.value,
          })
        }
      >
        <option value={""}>Select Manager</option>
        {users.map((user) => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};

import { SearchBox } from "./search-box";
import { List } from "./list";
import { useState, useEffect } from "react";
import { cleanObject, useMounted, useDebounce } from "../../utils/index";
import * as qs from "qs";

const API_URL = process.env.REACT_APP_API_URL;

export const ProjectListPage = () => {
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState({
    name: "",
    personId: "",
  });
  const debouncedSearch = useDebounce(search, 300);
  useMounted(() => {
    fetch(`${API_URL}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  }); // IMPORTANT: if use [users] will cause infinit loop to send fetch request

  useEffect(() => {
    fetch(
      `${API_URL}/projects?${qs.stringify(cleanObject(debouncedSearch))}`
    ).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debouncedSearch]);

  return (
    <div>
      <SearchBox
        search={search}
        setSearch={setSearch}
        users={users}
      ></SearchBox>
      <List users={users} list={list}></List>
    </div>
  );
};

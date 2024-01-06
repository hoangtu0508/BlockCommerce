import React, { useState, useEffect } from "react";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from "@windmill/react-ui";
import response from "../utils/demo/usersData";
import { useContext } from "react";
import { Context } from "../utils/AppContext";
import { baseURLImg } from "../utils/utils";

const UsersTable = ({ resultsPerPage, filter }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const { customers, getCustomers } = useContext(Context)
  const totalResults = customers?.length;
  useEffect(() => {
    getCustomers()
  }, [])

  console.log(customers);
  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(customers?.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page, resultsPerPage, filter]);

  return (
    <div>
      {/* Table */}
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Full Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Joined on</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {customers?.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar
                      className="hidden mr-3 md:block"
                      src={baseURLImg + user?.avatar[0]?.url}
                      alt="User image"
                    />
                    <div>
                      <p className="font-semibold">{user.username}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.phone}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.email}</span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>
    </div>
  );
};

export default UsersTable;

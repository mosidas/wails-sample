/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  LoadAcconts,
  SaveAccount,
} from "../../../wailsjs/go/main/Accountlogic";
import { useState, useEffect, useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

const style = css`
  background-color: lightgray;
  padding: 10px;
`;

const Menu1 = () => {
  const [accounts, setAccounts] = useState([] as any[]);
  useEffect(() => {
    LoadAcconts().then((res: any[]) => {
      setAccounts(res);
    });
  }, []);

  const handleEdit = async (updatedRow: any) => {
    await SaveAccount(updatedRow);
    setAccounts((prevAccounts) =>
      prevAccounts.map((account) =>
        account.ID === updatedRow.ID ? { ...account, ...updatedRow } : account
      )
    );
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "ID",
        header: "Id",
        enableSorting: true,
        enableColumnFilter: true,
        editable: false,
      },
      {
        accessorKey: "Name",
        header: "Name",
        enableSorting: true,
        enableColumnFilter: true,
        editable: true,
      },
      {
        accessorKey: "EMail",
        header: "Email",
        enableSorting: true,
        enableColumnFilter: true,
        editable: true,
      },
      {
        accessorKey: "Birthday",
        header: "Birthday",
        enableSorting: true,
        enableColumnFilter: true,
        editable: true,
      },
      {
        accessorKey: "CreatedAt",
        header: "Created At",
        enableSorting: true,
        enableColumnFilter: true,
        editable: false,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns: columns,
    data: accounts,
    enableColumnActions: true,
    enableEditing: true,
    editDisplayMode: "row",
    onEditingRowSave: ({ table, row, values }) => {
      console.log(values);
      handleEdit(values);
      table.setEditingRow(null); //exit editing mode
    },
    onEditingRowCancel: () => {},
    initialState: {
      density: "compact",
      pagination: {
        pageSize: 100,
        pageIndex: 0,
      },
    },
  });

  return (
    <div css={style}>
      <MaterialReactTable table={table} />
    </div>
  );
};

export default Menu1;

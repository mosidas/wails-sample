/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { LoadAcconts, SaveAccount } from "../../../wailsjs/go/main/Accountlogic";
import { useState, useEffect, useMemo } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import type { main } from "../../../wailsjs/go/models";

const style = css`
  background-color: lightgray;
  padding: 10px;
`;

const Menu1 = () => {
	const [accounts, setAccounts] = useState([] as main.Account[]);
	useEffect(() => {
		LoadAcconts().then((res: main.Account[]) => {
			setAccounts(res);
		});
	}, []);

	const handleEdit = async (updatedRow: main.Account) => {
		await SaveAccount(updatedRow);
		setAccounts((prevAccounts) =>
			prevAccounts.map((account) =>
				account.id === updatedRow.id ? { ...account, ...updatedRow, convertValues: account.convertValues } : account,
			),
		);
	};

	const columns = useMemo(
		() => [
			{
				accessorKey: "id",
				header: "Id",
				enableSorting: true,
				enableColumnFilter: true,
				editable: false,
			},
			{
				accessorKey: "name",
				header: "Name",
				enableSorting: true,
				enableColumnFilter: true,
				editable: true,
			},
			{
				accessorKey: "email",
				header: "Email",
				enableSorting: true,
				enableColumnFilter: true,
				editable: true,
			},
			{
				accessorKey: "birthday",
				header: "Birthday",
				enableSorting: true,
				enableColumnFilter: true,
				editable: true,
			},
			{
				accessorKey: "createdAt",
				header: "Created At",
				enableSorting: true,
				enableColumnFilter: true,
				editable: false,
			},
		],
		[],
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

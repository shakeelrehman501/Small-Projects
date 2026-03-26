import { Search } from "lucide-react";
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Developer" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Designer" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager" },
  { id: 4, name: "Alice Williams", email: "alice@example.com", role: "Developer" },
  { id: 5, name: "Charlie Brown", email: "charlie@example.com", role: "Designer" },
  { id: 6, name: "David Miller", email: "david@example.com", role: "Developer" },
  { id: 7, name: "Emma Davis", email: "emma@example.com", role: "Manager" },
  { id: 8, name: "Frank Wilson", email: "frank@example.com", role: "Designer" },
  { id: 9, name: "Grace Lee", email: "grace@example.com", role: "Developer" },
  { id: 10, name: "Henry Taylor", email: "henry@example.com", role: "Manager" },
];
function SearchFilterApp() {
  return (
    <div className="max-w-4xl w-full p-8 ">
      <div className="bg-white shadow-md p-8 rounded-md space-y-5">
        <h1 className="text-2xl font-bold">Search Filter App</h1>

        <div className="relative">
            <Search
              size={18}
              className="text-gray-400 
              absolute top-1/2 left-3 -translate-y-1/2"
            />
          <input
            type="text"
            className=" w-full outline rounded-sm outline-gray-300 focus:outline-0 focus:ring-2 focus:ring-blue-500  px-10 py-2"
            placeholder="Search by name, email, or role..."
          />
        </div>
        <p className="text-sm text-gray-600">Showing 10 of 10 Users</p>
        <div className="space-y-3">
          <div className="flex justify-between items-center bg-gray-50 rounded-md shadow-sm px-3 py-2">
            <div>
              <p className="font-bold">John Doe</p>
              <p className="text-sm text-gray-500">john@example.com</p>
            </div>
            <span className="bg-blue-100 text-blue-700 font-semibold rounded-full px-3 py-1">
              Developer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchFilterApp;

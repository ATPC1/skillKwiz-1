import { Edit } from "lucide-react";
import Image from "next/image";

export default function EmployerProfile() {
  return (
    <div className="text-white">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white/10 rounded-lg p-6">
        <div className="w-40 h-40 rounded-full overflow-hidden bg-gradient-to-b from-gray-300 to-gray-400 flex-shrink-0">
          <Image
            src="/images/profile-pic.png"
            alt="Profile"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h1 className="text-4xl font-bold mb-2">Robert Jane</h1>
            <button className="text-white hover:text-blue-200">
              <Edit className="w-6 h-6" />
            </button>
          </div>

          <h2 className="text-2xl mb-4">Amazon</h2>

          <div className="space-y-2">
            <p className="text-lg">
              <span className="font-medium">Department : </span>
              Human Resource
            </p>
            <p className="text-lg">
              <span className="font-medium">Contact No : </span>
              6380101407
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

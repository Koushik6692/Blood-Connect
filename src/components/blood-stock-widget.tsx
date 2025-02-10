export default function BloodStockWidget() {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h3 className="text-lg font-semibold text-red-600 mb-2">Blood Stock Availability</h3>
        <ul className="space-y-1">
          <li>A+ : <span className="font-bold">12 units</span></li>
          <li>O- : <span className="font-bold text-red-600">5 units (Low!)</span></li>
          <li>B+ : <span className="font-bold">8 units</span></li>
        </ul>
      </div>
    );
  }
  
"use client";

import { useState, useMemo } from "react";
import { MaintenanceTask } from "../types";
import { initialTasks } from "../data/mock-maintenance";
import { MaintenanceHeroBar } from "./maintenance-hero-bar";
import { MaintenanceFilterBar } from "./maintenance-filter-bar";
import { MaintenanceTable } from "./maintenance-table";
import { AssignSupervisorModal } from "./assign-supervisor-modal";
import { StartCleaningModal } from "./start-cleaning-modal";
import { ConfirmCompletionModal } from "./confirm-completion-modal";

export function MaintenanceView() {
  const [tasks, setTasks] = useState<MaintenanceTask[]>(initialTasks);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  // Modal states
  const [selectedTask, setSelectedTask] = useState<MaintenanceTask | null>(null);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [isStartModalOpen, setIsStartModalOpen] = useState(false);
  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false);

  // Filter tasks based on searchQuery, selectedType, selectedStatus
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      // Type filter
      if (selectedType !== "all" && task.type !== selectedType) {
        return false;
      }

      // Status filter
      if (selectedStatus !== "all") {
        if (selectedStatus === "needs_cleaning" && task.status !== "needs_cleaning") {
          return false;
        }
        if (selectedStatus === "in_progress" && task.status !== "in_progress") {
          return false;
        }
        if (selectedStatus === "pending" && task.status !== "pending") {
          return false;
        }
      }

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        const matchesRef = task.reference.toLowerCase().includes(query);
        const matchesUnit = task.unit.name.toLowerCase().includes(query);
        const matchesProp = task.property.name.toLowerCase().includes(query);
        const matchesOwner = task.owner.name.toLowerCase().includes(query);
        const matchesStaff = task.assignedStaff?.name.toLowerCase().includes(query) ?? false;
        if (!matchesRef && !matchesUnit && !matchesProp && !matchesOwner && !matchesStaff) {
          return false;
        }
      }

      return true;
    });
  }, [tasks, selectedType, selectedStatus, searchQuery]);

  // Counts for tabs
  const counts = {
    allOperations: 48,
    cleaning: 28,
    maintenance: 20,
    allStatus: 2,
    pending: 1,
    inProgress: 2,
    needsCleaning: 2,
  };

  // Actions
  const handleOpenAssignModal = (task: MaintenanceTask) => {
    setSelectedTask(task);
    setIsAssignModalOpen(true);
  };

  const handleOpenStartModal = (task: MaintenanceTask) => {
    setSelectedTask(task);
    setIsStartModalOpen(true);
  };

  const handleOpenCompleteModal = (task: MaintenanceTask) => {
    setSelectedTask(task);
    setIsCompleteModalOpen(true);
  };

  const handleConfirmAssign = (supervisorName: string, notes: string) => {
    if (!selectedTask) return;
    setTasks((prev) =>
      prev.map((t) =>
        t.id === selectedTask.id
          ? {
              ...t,
              assignedStaff: {
                id: "ST-01",
                name: supervisorName,
                role: "مشرف تنظيف معتمد",
                rating: "★ 4.9 (142 مهمة)",
              },
              notes,
              lastUpdated: "الآن",
            }
          : t
      )
    );
  };

  const handleConfirmStart = () => {
    if (!selectedTask) return;
    setTasks((prev) =>
      prev.map((t) =>
        t.id === selectedTask.id
          ? {
              ...t,
              status: "in_progress",
              statusLabel: "جاري التنظيف",
              startedAt: "18 سبتمبر 2026 — 12:25 م",
              lastUpdated: "الآن",
              accessCode: "482019",
            }
          : t
      )
    );
  };

  const handleConfirmComplete = (notes?: string) => {
    if (!selectedTask) return;
    setTasks((prev) =>
      prev.map((t) =>
        t.id === selectedTask.id
          ? {
              ...t,
              status: "completed",
              statusLabel: "مكتملة",
              completedAt: "18 سبتمبر 2026 — 01:07 م",
              lastUpdated: "الآن",
              notes: notes || t.notes,
            }
          : t
      )
    );
  };

  return (
    <div
      className="flex flex-col gap-[20px] w-full text-right font-cairo"
      data-node-id="1:10347"
      data-name="الصيانة والتنظيف"
      dir="rtl"
    >
      {/* 1. Hero Bar */}
      <MaintenanceHeroBar />

      {/* 2. Filters & Search */}
      <MaintenanceFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        counts={counts}
      />

      {/* 3. Operations Table */}
      <MaintenanceTable
        tasks={filteredTasks}
        onAssignStaff={handleOpenAssignModal}
        onStartCleaning={handleOpenStartModal}
        onConfirmComplete={handleOpenCompleteModal}
      />

      {/* 4. Modals */}
      <AssignSupervisorModal
        task={selectedTask}
        isOpen={isAssignModalOpen}
        onClose={() => setIsAssignModalOpen(false)}
        onConfirm={handleConfirmAssign}
      />

      <StartCleaningModal
        task={selectedTask}
        isOpen={isStartModalOpen}
        onClose={() => setIsStartModalOpen(false)}
        onConfirm={handleConfirmStart}
      />

      <ConfirmCompletionModal
        task={selectedTask}
        isOpen={isCompleteModalOpen}
        onClose={() => setIsCompleteModalOpen(false)}
        onConfirm={handleConfirmComplete}
      />
    </div>
  );
}

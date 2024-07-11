import React, { useEffect, useState } from "react";
import {
  ButtonContainer,
  ButtonDescription,
  FilterButton,
  FilterCategory,
  FilterCategoryHeading,
  FilterInput,
  FilterLabel,
  FilterOptions,
  FiltersSection,
  FiltersWindow,
  SortButton,
  SortCategory,
  SortCategoryHeading,
  SortOptions,
  SortWindow,
  TasksContainer,
  Wrapper,
} from "./styled";
import TasksSection from "../../Components/TasksSection";
import { MdDone, MdOutlineFilterAlt, MdSort } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectTasks } from "../../../features/tasksSlice";
import Task from "../../Components/Task";
import {
  HiOutlineSortAscending,
  HiOutlineSortDescending,
} from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

export default function Tasks() {
  const tasks = useSelector(selectTasks);
  const [shownTasks, setShownTasks] = useState(tasks);
  const [filtersAndSortState, setFiltersAndSortState] = useState({
    isFiltersMenuOpened: false,
    isSortMentuOpened: false,
  });

  const [params, setParams] = useSearchParams();
  const filters = params.getAll("filter");
  const sort = params.get("sort");

  function toggleFilter(filter) {
    const URLParams = new URLSearchParams(params);
    switch (filter) {
      case "tododate/today":
        URLParams.delete("filter", "tododate/thisweek");
        if (URLParams.has("filter", filter)) {
          URLParams.delete("filter", filter);
        } else {
          URLParams.append("filter", filter);
        }
        setParams(URLParams);
        return;
      case "tododate/thisweek":
        URLParams.delete("filter", "tododate/today");
        if (URLParams.has("filter", filter)) {
          URLParams.delete("filter", filter);
        } else {
          URLParams.append("filter", filter);
        }
        setParams(URLParams);
        return;
      case "tododate/pastdue":
        URLParams.delete("filter", "showpastdue/off");
        if (URLParams.has("filter", filter)) {
          URLParams.delete("filter", filter);
        } else {
          URLParams.append("filter", filter);
        }
        setParams(URLParams);
        return;
      case "showpastdue/off":
        URLParams.delete("filter", "tododate/pastdue");
        if (URLParams.has("filter", filter)) {
          URLParams.delete("filter", filter);
        } else {
          URLParams.append("filter", filter);
        }
        setParams(URLParams);
        return;
      default:
        if (URLParams.has("filter", filter)) {
          URLParams.delete("filter", filter);
        } else {
          URLParams.append("filter", filter);
        }
        setParams(URLParams);
        return;
    }
  }

  function setSort(sort) {
    const URLParams = new URLSearchParams(params);
    if (params.has("sort", sort)) {
      URLParams.delete("sort", sort);
    } else {
      URLParams.set("sort", sort);
    }
    setParams(URLParams);
  }

  function filterTasksByToDoDate(filters, tasks) {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    if (filters.includes("tododate/today")) {
      if (filters.includes("tododate/pastdue")) {
        return tasks.filter((t) => t.date && t.date <= date.getTime());
      } else {
        return tasks.filter((t) => t.date && t.date == date.getTime());
      }
    } else if (filters.includes("tododate/thisweek")) {
      const dayOfWeek = date.getDay();
      const daysUntilSunday = 7 - dayOfWeek;
      const endOfWeek = new Date(date);
      endOfWeek.setHours(0, 0, 0, 0);
      endOfWeek.setDate(date.getDate() + daysUntilSunday);
      if (filters.includes("tododate/pastdue")) {
        return tasks.filter((t) => t.date && t.date <= endOfWeek.getTime());
      } else {
        return tasks.filter(
          (t) =>
            t.date && t.date <= endOfWeek.getTime() && t.date >= date.getTime()
        );
      }
    } else if (filters.includes("tododate/pastdue")) {
      return tasks.filter((t) => t.date && t.date < date.getTime());
    } else {
      return tasks;
    }
  }

  function filterTasksByPriority(filters, tasks) {
    const reducedPriority = filters.reduce((acc, filter) => {
      const [category, value] = filter.split("/");
      if (category === "priority") {
        acc.push(value);
      }
      return acc;
    }, []);
    if (reducedPriority.length) {
      return tasks.filter(
        ({ priority }) =>
          priority && reducedPriority.includes(priority.toLowerCase())
      );
    } else {
      return tasks;
    }
  }

  function sortTasksByToDoDate(tasks) {
    return tasks.sort((a, b) => a.date - b.date);
  }

  function sortTasksByCreationDate(tasks) {
    return tasks.sort((a, b) => a.createDate - b.createDate);
  }

  function sortTasksByPriority(tasks) {
    return tasks.sort((a, b) => {
      switch (a.priority) {
        case "High":
          if (b.priority) {
            if (b.priority === "High") {
              return 0;
            } else {
              return -1;
            }
          } else {
            return -1;
          }
        case "Medium":
          if (b.priority) {
            if (b.priority === "Medium") {
              return 0;
            } else if (b.priority === "Low") {
              return -1;
            } else {
              return 1;
            }
          } else {
            return -1;
          }
        case "Low":
          if (b.priority) {
            if (b.priority === "Low") {
              return 0;
            } else {
              return 1;
            }
          } else {
            return -1;
          }
        default:
          return 1;
      }
    });
  }

  // filter names
  // ToDoDate: today - tododate/today || thisWeek - tododate/thisweek || past due - tododate/pastdue
  // Priority: high - priority/high || medium - priority/medium || low - priority/low
  // State: show Done off - showdonetasks/off || show past due tasks - showpastdue/off

  useEffect(() => {
    if (
      filters.includes("tododate/today") &&
      filters.includes("tododate/thisweek")
    ) {
      const URLParams = new URLSearchParams(params);
      URLParams.delete("filter", "tododate/thisweek");
      setParams(URLParams);
    }
    if (
      filters.includes("tododate/pastdue") &&
      filters.includes("showpastdue/off")
    ) {
      const URLParams = new URLSearchParams(params);
      URLParams.delete("filter", "showpastdue/off");
      setParams(URLParams);
    }
  }, [filters]);

  useEffect(() => {
    let filteredTasks = [...tasks];
    filteredTasks = [...filterTasksByToDoDate(filters, filteredTasks)];
    filteredTasks = [...filterTasksByPriority(filters, filteredTasks)];
    if (filters.includes("showdonetasks/off")) {
      filteredTasks = [...filteredTasks.filter((t) => !t.done)];
    }
    if (filters.includes("showpastdue/off")) {
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      filteredTasks = [
        ...filteredTasks.filter((t) => t.date && t.date >= date.getTime()),
      ];
    }
    // filteredTasks = [...sortTasksByPriority(filteredTasks)];
    // filteredTasks = [...sortTasksByToDoDate(filteredTasks)];
    switch (sort) {
      case "tododate/ascending":
        filteredTasks = [
          ...sortTasksByToDoDate(filteredTasks).sort((a, b) =>
            !a.date ? 1 : !b.date ? -1 : 0
          ),
        ];

      case "tododate/descending":
        filteredTasks = [...sortTasksByToDoDate(filteredTasks).reverse()];

      case "creationdate/ascending":
        filteredTasks = [...sortTasksByCreationDate(filteredTasks)];

      case "creationdate/descending":
        filteredTasks = [...sortTasksByCreationDate(filteredTasks).reverse()];

      case "priority/descending":
        filteredTasks = [...sortTasksByPriority(filteredTasks)];

      case "priority/ascending":
        filteredTasks = [
          ...sortTasksByPriority(filteredTasks)
            .reverse()
            .sort((a, b) => (!a.priority ? 1 : !b.priority ? -1 : 0)),
        ];

      case null:
        filteredTasks = [...sortTasksByCreationDate(filteredTasks)];
    }
    setShownTasks(filteredTasks);
  }, [params, tasks]);

  return (
    <Wrapper>
      <TasksSection heading="Your tasks">
        <FiltersSection>
          <ButtonContainer>
            <ButtonDescription>Filter</ButtonDescription>
            <FilterButton
              isOpened={filtersAndSortState.isFiltersMenuOpened}
              onClick={() => {
                setFiltersAndSortState({
                  isSortMentuOpened: false,
                  isFiltersMenuOpened: !filtersAndSortState.isFiltersMenuOpened,
                });
              }}
            >
              <MdOutlineFilterAlt />
            </FilterButton>
          </ButtonContainer>
          <ButtonContainer>
            <ButtonDescription> Sort</ButtonDescription>
            <FilterButton
              sortButton
              isOpened={filtersAndSortState.isSortMentuOpened}
              onClick={() => {
                setFiltersAndSortState({
                  isFiltersMenuOpened: false,
                  isSortMentuOpened: !filtersAndSortState.isSortMentuOpened,
                });
              }}
            >
              <MdSort />
            </FilterButton>
          </ButtonContainer>
        </FiltersSection>
        {filtersAndSortState.isFiltersMenuOpened ? (
          <FiltersWindow>
            {/* <FilterCategory>
            <FilterCategoryHeading>Your categories</FilterCategoryHeading>
            <FilterOptions>
              <FilterLabel>
                <FilterInput type="checkbox" /> Home
              </FilterLabel>
              <FilterLabel>
                <FilterInput type="checkbox" /> School
              </FilterLabel>
              <FilterLabel>
                <FilterInput type="checkbox" /> Work
              </FilterLabel>
            </FilterOptions>
          </FilterCategory> */}
            <FilterCategory>
              <FilterCategoryHeading>To do date</FilterCategoryHeading>
              <FilterOptions>
                <FilterLabel>
                  <FilterInput
                    type="checkbox"
                    isChecked={filters.includes("tododate/today")}
                    onClick={() => {
                      toggleFilter("tododate/today");
                    }}
                  >
                    <MdDone />
                  </FilterInput>
                  Today
                </FilterLabel>
                <FilterLabel>
                  <FilterInput
                    type="checkbox"
                    isChecked={filters.includes("tododate/thisweek")}
                    onClick={() => {
                      toggleFilter("tododate/thisweek");
                    }}
                  >
                    <MdDone />
                  </FilterInput>
                  This week
                </FilterLabel>
                <FilterLabel>
                  <FilterInput
                    type="checkbox"
                    isChecked={filters.includes("tododate/pastdue")}
                    onClick={() => {
                      toggleFilter("tododate/pastdue");
                    }}
                  >
                    <MdDone />
                  </FilterInput>
                  Past Due
                </FilterLabel>
              </FilterOptions>
            </FilterCategory>
            <FilterCategory>
              <FilterCategoryHeading>Priority</FilterCategoryHeading>
              <FilterOptions>
                <FilterLabel>
                  <FilterInput
                    type="checkbox"
                    isChecked={filters.includes("priority/high")}
                    onClick={() => {
                      toggleFilter("priority/high");
                    }}
                  >
                    <MdDone />
                  </FilterInput>
                  High
                </FilterLabel>
                <FilterLabel>
                  <FilterInput
                    type="checkbox"
                    isChecked={filters.includes("priority/medium")}
                    onClick={() => {
                      toggleFilter("priority/medium");
                    }}
                  >
                    <MdDone />
                  </FilterInput>
                  Medium
                </FilterLabel>
                <FilterLabel>
                  <FilterInput
                    type="checkbox"
                    isChecked={filters.includes("priority/low")}
                    onClick={() => {
                      toggleFilter("priority/low");
                    }}
                  >
                    <MdDone />
                  </FilterInput>
                  Low
                </FilterLabel>
              </FilterOptions>
            </FilterCategory>
            <FilterCategory>
              <FilterCategoryHeading>State</FilterCategoryHeading>
              <FilterOptions>
                <FilterLabel>
                  <FilterInput
                    type="checkbox"
                    isChecked={!filters.includes("showdonetasks/off")}
                    onClick={() => {
                      toggleFilter("showdonetasks/off");
                    }}
                  >
                    <MdDone />
                  </FilterInput>
                  Show done tasks
                </FilterLabel>
                <FilterLabel>
                  <FilterInput
                    type="checkbox"
                    isChecked={!filters.includes("showpastdue/off")}
                    onClick={() => {
                      toggleFilter("showpastdue/off");
                    }}
                  >
                    <MdDone />
                  </FilterInput>
                  Show past due
                </FilterLabel>
              </FilterOptions>
            </FilterCategory>
          </FiltersWindow>
        ) : null}
        {filtersAndSortState.isSortMentuOpened ? (
          <SortWindow>
            <SortCategory>
              <SortCategoryHeading>By todo date</SortCategoryHeading>
              <SortOptions>
                <SortButton
                  isChecked={sort === "tododate/ascending"}
                  onClick={() => {
                    setSort("tododate/ascending");
                  }}
                >
                  <HiOutlineSortAscending /> Form oldest to newest
                </SortButton>
                <SortButton
                  isChecked={sort === "tododate/descending"}
                  onClick={() => {
                    setSort("tododate/descending");
                  }}
                >
                  <HiOutlineSortDescending /> Form newest to oldest
                </SortButton>
              </SortOptions>
            </SortCategory>
            <SortCategory>
              <SortCategoryHeading>By creation date</SortCategoryHeading>
              <SortOptions>
                <SortButton
                  isChecked={sort === "creationdate/ascending"}
                  onClick={() => {
                    setSort("creationdate/ascending");
                  }}
                >
                  <HiOutlineSortAscending /> Form oldest to newest
                </SortButton>
                <SortButton
                  isChecked={
                    sort === "creationdate/descending" || sort === null
                  }
                  onClick={() => {
                    setSort("creationdate/descending");
                  }}
                >
                  <HiOutlineSortDescending /> Form newest to oldest
                </SortButton>
              </SortOptions>
            </SortCategory>
            <SortCategory>
              <SortCategoryHeading>By priority</SortCategoryHeading>
              <SortOptions>
                <SortButton
                  isChecked={sort === "priority/descending"}
                  onClick={() => {
                    setSort("priority/descending");
                  }}
                >
                  <HiOutlineSortDescending /> From high to low
                </SortButton>
                <SortButton
                  isChecked={sort === "priority/ascending"}
                  onClick={() => {
                    setSort("priority/ascending");
                  }}
                >
                  <HiOutlineSortAscending /> From low to high
                </SortButton>
              </SortOptions>
            </SortCategory>
          </SortWindow>
        ) : null}
        <TasksContainer>
          {shownTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </TasksContainer>
      </TasksSection>
    </Wrapper>
  );
}

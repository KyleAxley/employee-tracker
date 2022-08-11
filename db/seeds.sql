INSERT INTO department (name)
VALUES
('Front of House'), -- 1
('Back of House'), -- 2
('Private Dining'), -- 3
('Accounting'), -- 4
('Marketing'); -- 5

INSERT INTO roles (title, salary, department_id)
VALUES
('General Manager', 150000, 1), -- 1
('Asst General Manager', 75000, 1), -- 2
('Server', 60000, 1), -- 3
('Bartender', 60000, 1), -- 4
('Executive Chef', 100000, 2), -- 5
('Chef de Cuisine', 90000, 2), -- 6
('Sous Chef', 58000, 2), -- 7
('Line Cook', 45000, 2), -- 8
('Private Dining Director', 110000, 3), -- 9
('PD Assistant', 60000, 3), -- 10
('Controller', 95000, 4), -- 11
('Marketing Director', 100000, 5); -- 12

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Brenda', 'Clark', 1, NULL), -- GM
('Rorden', 'Gamsey', 5, NULL), -- Executive Chef
('Ashley', 'Brooks', 9, NULL), -- PD Director
('Lauren', 'Smith', 11, NULL), -- Controller
('Samantha', 'McDonald', 12, NULL ), -- Marketing Director 
('John', 'Wayne', 2, 1),  -- AGM
('Thomas', 'Dunn', 3, 1), -- Server
('Jim', 'Sanders', 3, 1),  -- Server
('Kyle', 'Summers', 3, 1),  -- Server
('Michael', 'Bailey', 3, 1),  -- Server
('Nichole', 'Smith', 3, 1),  -- Server
('Beth', 'Baily', 4, 1),  -- Bartender
('Rico', 'Gonzalez', 4, 1),  -- Bartender
('Raven', 'Cooper', 4, 1),  -- Bartender
('Kenneth', 'Bryant', 6, 2), -- Chef de Cuisine
('Amanda', 'Christian', 7, 2),  -- Sous Chef
('Raymond', 'Anderson', 8, 2),  -- Line Cook
('Ryan', 'Thompson', 8, 2),  -- Line Cook
('Sondra', 'Clarence', 8, 2),  -- Line Cook
('Harold', 'Smith', 8, 2),  -- Line Cook
('Leroy', 'Jenkins', 8, 2),  -- Line Cook
('Carl', 'Rogers', 10, 3); -- PD assistant
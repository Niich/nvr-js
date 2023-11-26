CREATE OR REPLACE VIEW nvr_event AS
  SELECT 
  "time" as Date,
  action as Name,
  filename as SensorID,
  id as EventID,
--   this split logic will not always work.
  split_part(username,'\', 1) as computer_n,
  split_part(username,'\', 2) as user_n,
  replace(username,'\','-') || '-monitor-comp' as cameraID
  FROM action_message;
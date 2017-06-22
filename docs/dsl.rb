
prikaz robot.rychle_vpred
  if vidi_zed?
    celem_vzad
    5.krat { krok }
  else
    3.krat { krok }
  end
end

#---------------------

prikaz rychle_vpred
  pokud robot.vidi_zed?
    robot.celem_vzad
    5.krat { robot.krok }
  jinak
    3.krat { krok }
  konec
konec


robot.vidi? :zed
robot.vidi? :bednu


robot.vidi_zed? a    !robot.vidi_bednu?
robot.vidi_zed? nebo  robot.vidi_bednu?

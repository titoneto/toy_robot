class Robot < ApplicationRecord
  DIRECTIONS = %w[NORTH EAST SOUTH WEST].freeze
  MAX_X = 4
  MAX_Y = 4
  MIN_X = 0
  MIN_Y = 0

  validates :facing, inclusion: { in: DIRECTIONS }

  def self.instance(x: nil, y: nil, facing: nil)
    return false unless (MIN_X..MAX_X).include?(x) && (MIN_Y..MAX_Y).include?(y) && DIRECTIONS.include?(facing)

    robot = first_or_initialize
    robot.update(x: x, y: y, facing: facing)
    robot
  end

  def move
    case facing
    when 'NORTH'
      self.y += 1 if y < MAX_Y
    when 'SOUTH'
      self.y -= 1 if y > MIN_Y
    when 'EAST'
      self.x += 1 if x < MAX_X
    when 'WEST'
      self.x -= 1 if x > MIN_X
    else
      return false
    end
    save
  end

  def turn_left
    current_index = DIRECTIONS.index(facing)
    self.facing = DIRECTIONS[(current_index - 1) % 4]
    save
  end

  def turn_right
    current_index = DIRECTIONS.index(facing)
    self.facing = DIRECTIONS[(current_index + 1) % 4]
    save
  end
end

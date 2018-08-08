import * as React from "react";
import * as Enigma from "enigma-ts-sim";

const enigma = (): Enigma.Enigma => {
    const rotorConfig: Enigma.RotorConfig = {
        1: ["EKMFLGDQVZNTOWYHXUSPAIBRCJ", ["Q"]],
        2: ["AJDKSIRUXBLHWTMCQGZNPYFVOE", ["E"]],
        3: ["BDFHJLCPRTXVZNYEIWGAKMUSQO", ["V"]],
        4: ["ESOVPZJAYQUIRHXLNFTGKDCMWB", ["J"]],
        5: ["VZBRGITYUPSDNHLXAWMJQOFECK", ["Z"]],
        6: ["JPGVOUMFYQBENHZRDKASXLICTW", ["Z", "M"]],
        7: ["NZJHGRCXMYSWBOUFAIVLPEKQDT", ["Z", "M"]],
        8: ["FKQHTLXOCBJSPDZRAMEWNIUYGV", ["Z", "M"]]
      }
      // reflector configurations
      const reflectorConfig: Enigma.ReflectorConfig = {
        B: "YRUHQSLDPXNGOKMIEBFZCWVJAT",
        C: "FVPJIAOYEDRZXWGCTKUQSBNMHL"
      }
      
      const mapArr = [[0, 1] as [number, number]];
      const pb = new Enigma.Plugboard(mapArr)
      const rotor_left: Enigma.Rotor = new Enigma.Rotor(rotorConfig[1][0], rotorConfig[1][1][0], "A", undefined);
      const rotor_middle: Enigma.Rotor = new Enigma.Rotor(rotorConfig[2][0], rotorConfig[2][1][0], "A", rotor_left);
      const rotor_right: Enigma.Rotor = new Enigma.Rotor(rotorConfig[3][0], rotorConfig[3][1][0], "B", rotor_middle);
      const reflector: Enigma.Reflector = new Enigma.Reflector(reflectorConfig["B"]);
      
      return new Enigma.Enigma(pb, [rotor_left, rotor_middle, rotor_right], reflector);
      
};

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h1>encrypted {enigma().encryptString("YEET")}</h1>

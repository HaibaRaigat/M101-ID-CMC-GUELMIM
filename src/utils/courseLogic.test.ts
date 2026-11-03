import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateCareerMatch,
  evaluateNetworkTopology,
  evaluateCyberDefense,
  simulateOasisIoT,
  calculateStudentRights,
} from './courseLogic';

test('calculateCareerMatch ranks chosen specialization first and sums percentages to ~100', () => {
  const scores = calculateCareerMatch({
    answers: ['cyber', 'cyber', 'cyber', 'sysres', 'cyber'],
    preferences: { cyber: 5, sysres: 3, cloud: 2, iot: 2 },
  });

  assert.equal(scores[0].id, 'cyber');
  assert.ok(scores[0].percentage > scores[1].percentage);
  const totalPct = scores.reduce((sum, s) => sum + s.percentage, 0);
  assert.ok(totalPct >= 98 && totalPct <= 102);
});

test('evaluateNetworkTopology detects critical failure vs nominal 1Gbps state', () => {
  const broken = evaluateNetworkTopology({
    fiberConnected: false,
    routerConfigured: true,
    switchPowered: true,
    wifiSecured: true,
  });
  assert.equal(broken.status, 'PANNE CRITIQUE');
  assert.equal(broken.connectedUsers, 0);

  const nominal = evaluateNetworkTopology({
    fiberConnected: true,
    routerConfigured: true,
    switchPowered: true,
    wifiSecured: true,
  });
  assert.equal(nominal.status, 'NOMINAL');
  assert.equal(nominal.connectedUsers, 30);
  assert.equal(nominal.bandwidthMbps, 1000);
});

test('evaluateCyberDefense calculates defense score accurately', () => {
  const full = evaluateCyberDefense({
    firewallActive: true,
    antivirusActive: true,
    encryptionActive: true,
    phishingTrainingActive: true,
  });
  assert.equal(full.score, 100);
  assert.equal(full.status, 'PROTÉGÉ');

  const partial = evaluateCyberDefense({
    firewallActive: true,
    antivirusActive: false,
    encryptionActive: true,
    phishingTrainingActive: false,
  });
  assert.equal(partial.score, 50);
  assert.equal(partial.status, 'VULNÉRABLE');
});

test('simulateOasisIoT triggers solar irrigation when soil moisture is below threshold', () => {
  const dry = simulateOasisIoT({
    soilMoisturePercent: 22,
    temperatureCelsius: 38,
    triggerThresholdPercent: 35,
    cloudConnected: true,
  });
  assert.equal(dry.pumpActive, true);
  assert.equal(dry.telemetryStatus, 'SYNCHRONISÉ');

  const wet = simulateOasisIoT({
    soilMoisturePercent: 48,
    temperatureCelsius: 28,
    triggerThresholdPercent: 35,
    cloudConnected: true,
  });
  assert.equal(wet.pumpActive, false);
});

test('calculateStudentRights computes Minhaty scholarship, AMO, and diploma validation', () => {
  const outsideResident = calculateStudentRights({
    hasBac: true,
    livesOutsideCity: true,
    age: 20,
    viaPasserelle: false,
    hasOtherHealthInsurance: false,
    ccScore: 14,
    efmScore: 13,
    effScore: 12,
    stageCompleted: true,
  });

  assert.equal(outsideResident.tsEligible, true);
  assert.equal(outsideResident.bourseType, 'BOURSE COMPLÈTE');
  assert.equal(outsideResident.bourseTranches.length, 3);
  assert.equal(outsideResident.amoEligible, true);
  assert.equal(outsideResident.diplomaGranted, true);
  assert.equal(outsideResident.finalAverage, 12.7);
});

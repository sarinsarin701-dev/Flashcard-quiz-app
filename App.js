import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const flashcards = [
  { question: "What is an Operational Amplifier (Op-Amp)?", answer: "A high-gain voltage amplifier with differential inputs." },
  { question: "What is Nyquist Rate in DSP?", answer: "Twice the maximum signal frequency (2 * fm)." },
  { question: "What is Gray Code?", answer: "A binary code where two consecutive values differ by only one bit." }
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flashcard Quiz</Text>

      <TouchableOpacity 
        style={styles.card} 
        onPress={() => setShowAnswer(!showAnswer)}
        activeOpacity={0.8}
      >
        <Text style={styles.tag}>{showAnswer ? "ANSWER" : "QUESTION"}</Text>
        <Text style={styles.cardText}>
          {showAnswer ? flashcards[currentIndex].answer : flashcards[currentIndex].question}
        </Text>
        <Text style={styles.flipText}>Tap to flip</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={nextCard}>
        <Text style={styles.btnText}>Next Question</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#38bdf8', marginBottom: 24 },
  card: { width: '90%', minHeight: 200, backgroundColor: '#1e293b', borderRadius: 14, padding: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#334155' },
  tag: { color: '#38bdf8', fontSize: 12, fontWeight: 'bold', marginBottom: 12 },
  cardText: { fontSize: 18, color: '#f8fafc', textAlign: 'center', lineHeight: 26 },
  flipText: { marginTop: 16, fontSize: 12, color: '#94a3b8' },
  btn: { marginTop: 24, backgroundColor: '#0284c7', paddingVertical: 12, paddingHorizontal: 28, borderRadius: 8 },
  btnText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' }
});
